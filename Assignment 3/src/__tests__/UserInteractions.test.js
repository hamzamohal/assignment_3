import { act, render, screen } from '@testing-library/react';
import App from '../App';

describe('User interactions', () => {
  test('User should be able to see the calculator page and do basic math calculations', async () => {
    const { container } = await act(async () => render(<App />));
    await act(async () => screen.getByText('Calculator').click());

    await act(async () => {
      container.querySelector('.one').click();
      container.querySelector('.two').click();

      container.querySelector('.add').click();

      container.querySelector('.five').click();
      container.querySelector('.zero').click();

      container.querySelector('.equal').click();
    });

    const result = container.querySelector('.screen');

    expect(result.textContent.trim()).toEqual((12 + 50).toString());
  });

  test('User should be able to see the home page', async () => {
    const { container } = await act(async () => render(<App />));
    await act(async () => screen.getByText('Home').click());

    const homeTitle = container.querySelector('.home-title');

    expect(homeTitle.textContent).toBe('Welcome to Math Magicians');
  });

  test('User should be able to see the Quotes page', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.86);

    const { container } = await act(async () => render(<App />));
    await act(async () => screen.getByText('Quotes').click());

    const quoteWrapper = container.querySelector('.quotes');
    const quote = quoteWrapper.children.item(0).textContent;
    const author = quoteWrapper.children.item(1).textContent;

    expect(quote).toBe('If you stop at general math, then you will only make general money');
    expect(author).toBe('Snoop Dogg');
  });
});
