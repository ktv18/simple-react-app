import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import SelectComponent from './SelectComponent';
import PostListComponent from './PostListComponent';
import NotFoundComponent from './NotFoundComponent';
import Users from '../data/users';
import Posts from '../data/posts';
import Content from '../data/content';
import {
    getUniqueListOfCitiesCities,
    getUniqueListOfCompanies,
    joinPostWithUsers,
    getFilteredSortedPosts,
    contentProvider
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

  onCityChange = e => {
      const cityName = e.target.value;
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
            <TitleComponent title={contentProvider(Content,"pageTitle")} />
            <nav>
                <SelectComponent
                    label={contentProvider(Content,"filterByCity")}
                    defaultValue={contentProvider(Content,"defaultTextSelectBox")}
                    source={this.state.cities}
                    onChange={this.onCityChange}
                />
                <SelectComponent
                    label={contentProvider(Content,"filterByCompany")}
                    defaultValue={contentProvider(Content,"defaultTextSelectBox")}
                    source={this.state.companies}
                    onChange={this.onCompanyChange}
                />
                <hr />
                <SelectComponent
                    label={contentProvider(Content,"sortBy")}
                    defaultValue={contentProvider(Content,"defaultTextSelectBox")}
                    source={{
                        "name": contentProvider(Content,"authorName"),
                        "city": contentProvider(Content,"cityName"),
                        "company": contentProvider(Content,"companyName"),
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
