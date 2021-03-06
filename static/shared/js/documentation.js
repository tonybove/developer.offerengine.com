// Init sidebar
$(function() {

  // add class for css styling
  $('div.sidebar-module ul li').addClass('js-topic');
  $('div.sidebar-module ul li ul').addClass('js-guides');

  var activeItem,
      helpList = $('#js-sidebar .js-topic'),
      firstOccurance = true

  // hide list items at startup
  if($('body.api') && window.location){
    var reg = /\/\/[^\/]+(\/.+)/g,
        docUrl = reg.exec(window.location.toString())
    if(docUrl){
      $('#js-sidebar .js-topic a').each(function(){
        var url = $(this).attr('href').toString()
        if(url.indexOf(docUrl[1]) >= 0 && url.length == docUrl[1].length){
          $(this).parent('li').addClass('disable')
          var parentTopic = $(this).parentsUntil('div.sidebar-module > ul').last()
          parentTopic.addClass('js-current')
          parentTopic.find('.js-expand-btn').toggleClass('collapsed expanded')
        }
      })
    }
  }

  $('#js-sidebar .js-topic').each(function(){
    if(($(this).find('.disable').length == 0 || firstOccurance == false) &&
    $(this).hasClass('js-current') != true){
      $(this).find('.js-guides').children().hide()
    } else {
      activeItem = $(this).index()
      firstOccurance = false
    }
  })

  // Toggle style list. Expanded items stay
  // expanded when new items are clicked.
  $('#js-sidebar .js-toggle-list .js-expand-btn').click(function(){
    var clickedTopic = $(this).parents('.js-topic'),
        topicGuides  = clickedTopic.find('.js-guides li')
    $(this).toggleClass('collapsed expanded')
    topicGuides.toggle(100)
    return false
  })

  // Accordion style list. Expanded items
  // collapse when new items are clicked.
  $('#js-sidebar .js-accordion-list .js-topic h3 a').click(function(){
    var clickedTopic = $(this).parents('.js-topic'),
        topicGuides = clickedTopic.find('.js-guides li')

    if(activeItem != clickedTopic.index()){
      if(helpList.eq(activeItem)){
        helpList.eq(activeItem).find('.js-guides li').toggle(100)
      }
      activeItem = clickedTopic.index()
      topicGuides.toggle(100)
    } else {
      activeItem = undefined
      topicGuides.toggle(100)
    }

    return false
  })

  $('.help-search .search-box').focus(function(){
    $(this).css('background-position','0px -25px')
  })

  $('.help-search .search-box').focusout(function(){
    if($(this).val() == ''){
      $(this).css('background-position','0px 0px')
    }
  })

  // Expands the code examples to a nice width within the page.
  // 898 is a nice looking width within the container
  // 538 is the original width of the code container (not counting border/padding/margin)
  // 560 is the displayed width of the code container
  $('pre.highlight').hover(function(){ // mouseover
    var $this = $(this);
    var $code = $this.find('code');

    if($code.width() > 560 && $code.width() <= 898){
      $this.animate({width: $code.width()});
    } else if($code.width() > 898) {
      $this.animate({width: 898});
    }

    $this.css('overflow-y', 'auto');

  }, function(){ // mouseout
    $(this).stop().animate({width: 538}).css('overflow-y', 'auto');
  });

  // Dynamic year for footer copyright
  var currentYear = (new Date).getFullYear();
  $("#year").text( (new Date).getFullYear() );

});
