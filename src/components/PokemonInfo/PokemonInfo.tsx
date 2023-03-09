interface StatTypes {
  name: string;
  abilities: string;
  stats: { name: string; base_stat: number }[];
  items?: string[];
  artwork: string;
  types: string[];
}

const PokemonInfo: React.FC<StatTypes> = props => {
  return (
    <div className='attributes-container'>
      <section>
        <figure className='artwork'>
          <img src={props.artwork} width={300} height={300} alt={props.name} />
          <div className='background'></div>
        </figure>
      </section>
      <section className='attributes'>
        <h3>{props.name}&#39;s Stats</h3>
        <ul>
          {props.stats.map((statItem, key) => (
            <li key={key}>
              <strong>{statItem.name}</strong>
              {/* <ProgressBar
                max={255}
                now={statItem.base_stat}
                label={statItem.base_stat}
                className={styles.progressbar}
                variant='warning'
              /> */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokemonInfo;
