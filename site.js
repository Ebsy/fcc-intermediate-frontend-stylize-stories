$(document).ready(function() {
  getData();
})

function getData() {
  $.getJSON("http://www.freecodecamp.com/news/hot", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push(buildStory(val));
    });

    $('#content').html(items);
  });
}

function buildStory(story) {
  // Mixing JS with HTML? Oh, the humanity! :p
  var html = '';
  html += '<div class="row">'
  html += '<div class="col-sm-4 col-xs-4 text-right bordercol">'
  html += '<img class="img-responsive" src="' + story.author.picture + '"/>'

  html += '</div>' //first col
  html += '<div class="col-md-8 col-sm-8 col-xs-8 borderleft">'
  html += '<a target="_blank" href="' + story.link + '">'
  html += '<h4 class="title">'
  html += story.headline
  html += '</h4>'
  html += '</a>'
  html += '<div class="storyDesc">' + story.metaDescription + '</div>'
  html += '<div class="storyPosted"><i class="fa fa-calendar-o fa-fw"></i>' + new Date(story.timePosted) + '</div>'
  html += '<div class="upVotes"><i class="fa fa-thumbs-o-up fa-fw"></i>' + story.upVotes.length + '</div>'
  html += '<a target="_blank" href="http://freecodecamp.com/' + story.author.username + '">'
  html += '<span><i class="fa fa-fire fa-fw"></i>' + story.author.username + '</span>'
  html += '</a>'
  html += '</div>' //second col
  html += '</div>' //row
  return html
}