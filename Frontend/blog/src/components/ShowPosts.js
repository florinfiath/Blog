import React from "react";
import { Link } from "react-router-dom";


const ShowPosts = (props) => {

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mb-5 mt-5">Popular Blogs</h1>
          <h2>
            WP Robot is an outstanding auto blog plugin for WordPress that will
            help you to add high-quality, curated content to your site within a
            couple of minutes.
          </h2>
          <h2>
            WP RSS Aggregator is the most popular, effective, easy-to-use and
            comprehensive RSS feed aggregator plugin for WordPress. With this
            plugin, you can display posts from multiple feed sources to keep
            your site fresh with new content all the time. It's a great way to
            create a niche news platform, where a user can find articles from
            multiple sites in one place.
          </h2>
          <h2>
            If you are a video blogger, this plugin will be very useful. With
            this plugin, you can import posts from YouTube to WordPress and
            WordPress to YouTube automatically with ease. This plugin uses the
            native API of YouTube to post videos on your WordPress blog.
          </h2>
          <h2>
            WPeMatico is a very easy-to-use auto blogging plugin that will help
            you automatically create posts from the RSS/Atom feeds of your
            choice. This plugin offers you a clean interface to manage all of
            the feeds you import. You can import feeds from multiple sources and
            arrange categories to make it user-friendly.
          </h2>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mb-5 mt-5">Your Story</h1>
          {props.show.map((post, index) => (
            <Link key={index} to={`/PostDetails/${post.id}`} className="link">
              <h2>{post.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ShowPosts;
