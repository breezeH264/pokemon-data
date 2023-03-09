interface CardTypes {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  weightKg: number;
  weightLbs: number;
  heightM: number;
  heightFt: number;
  artwork: string;
}

const PokemonBox: React.FC<CardTypes> = props => {
  return (
    <div className='container'>
      <figure className='card'>
        <section className='top'>
          <div className='artwork-container'>
            <img
              src={props.artwork}
              alt={props.name}
              width={400}
              height={400}
              className='artwork'
            />
          </div>
        </section>
        <section className='bottom'>
          <h2 className='pokename'>{props.name.toUpperCase()}</h2>
          <div className='types'>
            {props.types.map((type, key) => (
              <span key={key} className={`${type.type.name} ${type}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className='height-weight'>
            <section>
              <h3>Weight</h3>
              <p>
                {props.weightKg}kg / {Math.round(props.weightLbs * 10) / 10}
                lbs
              </p>
            </section>
            <section>
              <h3>Height</h3>
              <p>
                {props.heightM}m / {Math.round(props.heightFt * 10) / 10}
                ft
              </p>
            </section>
            <p className='identifier'>#{props.id}</p>
          </div>
        </section>
      </figure>
    </div>
  );
};

export default PokemonBox;
