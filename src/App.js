
import React, { Component } from 'react'
import Article from './components/Article'
import FeaturedArticle from './components/FeaturedArticle'
import Header from './components/Header'
import './App.css'

class App extends Component {

  render() {
    return (
      <div id='pageContainer'>
        <Header />
        <FeaturedArticle title='Curse of the Current Reviews' text='When you want to buy any application from the Apple iTunes store, you have more choices than you can handle. Most of the users scroll past the application description, completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.'/>
        <Article title='Hello Watchkit' text='Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.' commentnumber='12' likenumber='124'/>
        <Article title='Introduction to Swift' text='Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.' commentnumber='15' likenumber='45'/>
      </div>

      )
  }

}

export default App