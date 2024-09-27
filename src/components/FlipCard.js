import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Valyrian from '../assets/Valyrian.png';

class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { name, description } = this.props; // Get props for name and description

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        {/* Front of the card */}
        <div
          className="front-card bg-black bg-opacity-40 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center"
          style={{ height: '200px' }} // Set default height of 200px
        >
          <h3 className="text-3xl text-white text-center mb-4 font-cinzeldecorative">{name}</h3>
          <button
            className="bg-black border-opacity-60 text-white py-1.5 px-3 rounded text-sm align-bottom"
            onClick={this.handleClick}
          >
            View Details
          </button>
        </div>

        {/* Back of the card */}
        <div
          className="back-card bg-black bg-opacity-40 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center"
          style={{ height: '200px' }} // Set default height of 200px
        >
          <h3 className="text-1xl text-white text-center mb-4">{description}</h3>
        </div>
      </ReactCardFlip>
    );
  }
}

function CardGrid() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${Valyrian})` }}
    >
      <div className="bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center tracking-wider font-cinzeldecorative">
          Gamezz
        </h2>

        {/* Responsive grid for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row: Three cards on large screens, stack on small screens */}
          <FlipCard name="Dragon Shout" description="Control a dragon by shouting or screaming! Just like Flappy Bird, but your voice guides the dragon through obstacles. How far can you go before your dragon crashes?" />
          <FlipCard name="Essos Escape" description="Guide your object through a moving background, avoiding obstacles that fall from the top of the screen while collecting points. Dodge wisely, or you lose!" />
          <FlipCard name="Dragon Shout" description="Description for Stream go Hero" />

          {/* Second Row: Two cards on large screens */}
          <FlipCard name="Valar Morghulis" description="Using your virtual hand, swat crowns on the screen for points, but be careful! Accidentally grabbing a dagger will cost you. Powered by OpenCV." />
          <FlipCard name="Dracarys Dash" description=" Control a bar at the bottom of the screen with your hand to catch falling balls. The more balls you catch, the higher your score. Built with OpenCV for gesture control.
" />
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
