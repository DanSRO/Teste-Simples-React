import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Article } from './components/Articles/Article';

test('Exibe o título e o conteúdo do artigo', () => {
  render(<Article tumbnail="./assets/images/artigo1.png" title="Exemplo de teste 1" provider="Nasa em teste 1" description="Lorem ipsum dolor ..." />);
  const imgElement=screen.getByAltText(/Exemplo de teste 1/i);
  const titleElement = screen.getByText(/Exemplo de teste 1/i);
  const providerElement = screen.getByText(/Nasa em teste 1/i);
  const descriptionElement = screen.getByText(/Lorem ipsum dolor .../i);
  expect(imgElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(providerElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
