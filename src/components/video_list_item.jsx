/**
 * Import Modules
 */

import React from 'react';

/**
 * 1. Create a VideoList Component
 * 2. Passing both the props `video` and `onVideoSelect`
 *    `video` is getting passed through video list's map iteration argument for `videos`
 *    `onVideoSelect` is getting passed through video list, which is getting passed from main app
 */

const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url; // Fetch the image url of the video
  const videoTitle = video.snippet.title; // Fetch the title name of the video
  const videoChannel = video.snippet.channelTitle; // Fetch the channel name of the video

  return (
    /**
     * 1. React.createElement
     * 2. Return a List Group Item
     * 3. Create an Event onClick
     *    - Pass `onVideoSelect` with an argument `video`, current prop
     * 4. Add a Media Object 
     * 5. Nest two media object section's within Media Object 
     *    a. One would be for image
     *       Pass `imageUrl` variable to image source
     *    b. Second will be for Video Title and Channel name
     *       Pass `videoTitle` variable within H6 Tag for Video Title
     *       Pass `videoChannel` variable within p Tag for Channel name
     */
    <li className="list-group-item" onClick={() => onVideoSelect(video)}> 
      <div className="media-object">
        <div className="media-object-section">
          <img className="thumbnail" src={imageUrl} />            
        </div>
        <div className="media-object-section">
          <h6 className="u-black">{videoTitle}</h6>
          <p className="u-lightgray">{videoChannel}</p>
        </div>
      </div>
    </li>
  );
};

/**
 * Export VideoList Component
 */

export default VideoListItem;