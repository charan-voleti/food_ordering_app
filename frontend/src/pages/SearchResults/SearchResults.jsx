import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { food_list } from '../../assets/assets';
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query')?.toLowerCase() || "";

    const filteredItems = food_list.filter(item =>
        item.name.toLowerCase().includes(query)
    );

    const handleClick = (id) => {
        navigate("/", { state: { selectedDishId: id } });
    };

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            <div className="search-results-container">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div
                            key={item._id}
                            className="search-item"
                            onClick={() => handleClick(item._id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No items found</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
