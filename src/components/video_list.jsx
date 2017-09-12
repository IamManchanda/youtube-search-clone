/**
 * Import Modules
 */

import React from 'react';

/**
 * Import Component within this Component
 */

import VideoListItem from './video_list_item';

/**
 * Create a VideoList Component
 */

const VideoList = ({videos, onVideoSelect}) => {
  /**
   * 1. Create a videoItems variable
   *    Passing two props `videos` and `onVideoSelect`
   * 2. Assign it to a map for `videos` (which have array of objects)
   *    Argument passed would be `video` for each iteration
   */
  const videoItems = videos.map((video) => {
    // console.log(video);
    /**
     * 1. React.createElement
     * 2. Run an instance of VideoListItem Component
     * 3. Pass a prop `video` from property name `video`
     *    - will be used by videolist item
     * 4. Pass an `etag` (unique ref id) that is getting fetched from an youtube API 
     * 5. Pass a prop `onVideoSelect` from property name `onVideoSelect`
     *    - will be used by videolist item
     */
    return (
      <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect}  />
    );
  });

  /**
   * 1. React.createElement
   * 2. Creating an unordered list for a group of list items
   * 3. Referencing the `videoItems` variable from the above logic.
   */
  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
};

/**
 * Export VideoList Component
 */

export default VideoList;