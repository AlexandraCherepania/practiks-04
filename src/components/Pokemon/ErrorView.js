import errorImage from './error.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="450" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}