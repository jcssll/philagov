<?php
function namespace_ajax_search( $request ) {
    $posts = [];
    $results = [];
    // check for a search term
    if( isset($request['s'])) :
		// get posts
        $posts = get_posts([
            'posts_per_page' => 20
            'post_type' => ['page', 'post', 'custom-post-type'],
            's' => $request['s'],
        ]);
		// set up the data I want to return
        foreach($posts as $post):
            $results[] = [
                'title' => $post->post_title,
                'link' => get_permalink( $post->ID )
            ];
        endforeach;
    endif;

    if( empty($results) ) :
        return new WP_Error( 'front_end_ajax_search', 'No results');
    endif;

    return rest_ensure_response( $results );
}
?>