import React from 'react';
import { useSelector } from 'react-redux';

import { selectedMovie } from './redux/actions';

function DetailPanel() {

    const movieDetail = useSelector(selectedMovie);

    return (
        <div id="detailPanel">
            <h4 className="header">Details</h4>
            <br />

            <div className="details_wrap"
                style={{ display: movieDetail.title ? "flex" : "none" }}>
                <img src={movieDetail.poster} alt="" />
                <div className="table_wrap">
                    <div>
                        <h4 className="title_header">{movieDetail.title}</h4>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="column1">Year</td>
                            <td className="column2">{movieDetail.year}</td>
                        </tr>
                        <tr>
                            <td className="column1">Rated</td>
                            <td className="column2">{movieDetail.rated}</td>
                        </tr>
                        <tr>
                            <td className="column1">Released</td>
                            <td className="column2">{movieDetail.released}</td>
                        </tr>
                        <tr>
                            <td className="column1">Plot</td>
                            <td className="column2">{movieDetail.plot}</td>
                        </tr>
                        <tr>
                            <td className="column1">Actors</td>
                            <td className="column2">{movieDetail.actors}</td>
                        </tr>
                        <tr>
                            <td className="column1">Awards</td>
                            <td className="column2">{movieDetail.awards}</td>
                        </tr>
                        <tr>
                            <td className="column1">Directed by</td>
                            <td className="column2">{movieDetail.director}</td>
                        </tr>
                        <tr>
                            <td className="column1">Ratings</td>
                            <td className="column2">{movieDetail.ratings ? movieDetail.ratings.map(rating => {
                                return (<div key={rating.source} className="m_panel">
                                    <p className="m_title">{rating.source}</p>
                                    <p className="m_title">{rating.value}</p>
                                </div>)
                            }) : (<></>)}</td>
                        </tr>
                        <tr>
                            <td className="column1">BoxOffice</td>
                            <td className="column2">{movieDetail.boxOffice}</td>
                        </tr>
                        <tr>
                            <td className="column1">Production</td>
                            <td className="column2">{movieDetail.production}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default DetailPanel;
