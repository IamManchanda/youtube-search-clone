/**
 * Import Modules
 */

import React from 'react';

/**
 * Create a VideoDetail Component
 */

const VideoDetail = ({video}) => {
  /**
   * Add a check, untill the video gets response from network show Loading state!
   */
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId; // Fetch the video ID of the video
  const videoUrl = `https://www.youtube.com/embed/${videoId}`; // Fetch the embeded url of the video
  
  const videoTitle = video.snippet.title; // Fetch the Title of the Video
  const videoDescription = video.snippet.description; // Fetch the Description of the Video

  /**
   * 1. React.createElement
   * 2. Create a new Video Detail block
   * 3. Nest 3 elements in it.
   *    a. Responsive Embed Block
   *       - Will have Iframe with src as `videoUrl` variable
   *    b. H4 tag with `videoTitle` variable
   *    c. p tag with `videoDescription` variable
   */   
  return (
    <div className="video-detail">
      <div className="responsive-embed widescreen">
        <iframe src={videoUrl}></iframe>
      </div>
      <h4>{videoTitle}</h4>
      <p>{videoDescription}</p>
    </div>
  );
};

/**
 * Export VideoDetail Component
 */

export default VideoDetail;
