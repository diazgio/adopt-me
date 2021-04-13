import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  state: IState = {
    photos: [],
    active: 0
  }

  static getDerivedStateFromProps({ media }: IProps): { photos: string[] } {
    let photos = ['http://placecorgi.com/600/600'];

    if(media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if(!(event.target instanceof HTMLElement)) {
      return;
    }
    if(event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;