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
          <h3 className="text-2xl text-white text-center mb-4">{description}</h3>
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
          <FlipCard name="Hangman" description="Description for Hangman" />
          <FlipCard name="Dragon’s Hunt" description="Description for Dragon’s Hunt" />
          <FlipCard name="Stream go Hero" description="Description for Stream go Hero" />

          {/* Second Row: Two cards on large screens */}
          <FlipCard name="Unusual Floppy Bird" description="Description for Unusual Floppy Bird" />
          <FlipCard name="Dracarys Dash" description="Description for Dracarys Dash" />
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
