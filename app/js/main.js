var channelId = 'UCizY7DyPBbNT8FiLQXE36hg';
var vidWidth = 500;
var vidHeight = 400;
var vidResults = 10;
;
$(document).ready(function(){
            $.get("https://www.googleapis.com/youtube/v3/channels", {
                  part: 'contentDetails',
                  id: channelId,
                  key: 'AIzaSyAnjjmOFCwkvNqB73EueG-wp-RkOq8T3T0'
                  },
                  function(data) {
                  $.each(data.items, function(i, item){
                      console.log(item);
                      pid = item.contentDetails.relatedPlaylists.uploads;
                      getVids(pid);
                      });
                    }
            );

function getVids(pid) {
    $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
      part: 'snippet',
      maxResults: vidResults,
      playlistId: pid,
      key: 'AIzaSyAnjjmOFCwkvNqB73EueG-wp-RkOq8T3T0'
      },
function(data) {
    var output;
    $.each(data.items, function(i, item){
        console.log(item);
        videoTitle = item.snippet.title;
        videoId = item.snippet.resourceId.videoId;
        videoDescription = item.snippet.description;

        output = '<li><iframe height="'+vidHeight+'" width="'+vidWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe><p>'+videoDescription+'</p></li>';

      // Append to results StyleType
      $('#results').append(output);
          });
        }
      );
    };
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
