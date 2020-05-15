import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <header className="screen-reader-text">
                <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              </header>
              <div className="post-feed">
                <div className="post-feed-inside">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} className="post post-card">
                    <div className="post-inside">
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <header className="post-header">
                        <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      </header>
                      {_.get(post, 'frontmatter.excerpt') && 
                      <div className="post-content">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      </div>
                      }
                      <footer className="post-meta">
                        <time className="published"
                          dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </footer>
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </Layout>
        );
    }
}
