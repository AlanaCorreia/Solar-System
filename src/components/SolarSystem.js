import { React, Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="System">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
