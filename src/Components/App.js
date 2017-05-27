import React, { Component } from 'react';
import '../App.css';
import TitleComponent from './TitleComponent';
import SelectComponent from './SelectComponent';
import PostListComponent from './PostListComponent';
import NotFoundComponent from './NotFoundComponent';
import Users from '../data/users';
import Posts from '../data/posts';
import {
    getUniqueListOfCitiesCities,
    getUniqueListOfCompanies,
    joinPostWithUsers,
    getFilteredSortedPosts
} from '../utils/utils.js';

const posts = joinPostWithUsers(Posts, Users);

const cities = getUniqueListOfCitiesCities(Users);
const companies = getUniqueListOfCompanies(Users);

class App extends Component {

  state = {
      posts,
      cities,
      companies,
      filterByCity: '',
      filterByCompany: '',
      sortedBy: ''
  };

  shouldComponentUpdate(nextProps, nextState) {
      return !(this.state.posts.length === 0 && nextState.posts.length === 0)
  }

  componentDidUpdate () {
      console.log('componentDidUpdate');
      console.log(this.state.posts.length);
  };

  onCityChange = e => {
      const cityName = e.target.value;
      console.log('cityName', cityName);
      const {filterByCompany, sortedBy} = this.state;
      const filteredList = getFilteredSortedPosts({source: posts, filterByCity: cityName, filterByCompany, sortedBy});
      this.setState({
          filterByCity: cityName,
          posts: filteredList
      })
  };

  onCompanyChange = e => {
      const companyName = e.target.value;
      const {filterByCity, sortedBy} = this.state;
      const filteredList = getFilteredSortedPosts({source: posts, filterByCity, filterByCompany: companyName, sortedBy});
      this.setState({
          filterByCompany: companyName,
          posts: filteredList
      })
  };

  sortBy = e => {
      const sortedBy = e.target.value;
      const {filterByCompany, filterByCity} = this.state;
      const sortedPosts = getFilteredSortedPosts({source: posts, filterByCity, filterByCompany, sortedBy});
      this.setState({
          sortedBy,
          posts: sortedPosts
      })
  };

  render() {
    return (
        <div>
            <TitleComponent title="Posts" />
            <nav>
                <SelectComponent
                    label="city filter"
                    source={this.state.cities}
                    onChange={this.onCityChange}
                />
                <SelectComponent
                    label="company filter"
                    source={this.state.companies}
                    onChange={this.onCompanyChange}
                />
                <hr />
                <SelectComponent
                    label="sort by"
                    source={{
                        'Author name': 'name',
                        'City name': 'city',
                        'Company name': 'company'
                    }}
                    onChange={this.sortBy}
                />
            </nav>
            {!this.state.posts.length && ( <NotFoundComponent /> )}
            <PostListComponent
                posts={this.state.posts}
            />
          </div>
    );
  };
}

export default App;
