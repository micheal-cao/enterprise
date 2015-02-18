/**
* Code used in Samples and Demo Pages
*/


// Public Variable with some sample data
var demoTasks = [];
demoTasks.push({task:'063001', error: true, date: '10/11/2015' ,desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063002', date: '10/11/2015' , desc: 'Part #4212132 has low inventory level'});
demoTasks.push({task:'063003', date: '10/07/2015' , desc: 'Check #112412 parts ordering.'});
demoTasks.push({task:'063004', date: '10/07/2015' , desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063005', date: '10/11/2015' , desc: 'Call XYZ Inc at 5 PM'});
demoTasks.push({task:'063006', error: true, date: '10/11/2015' , desc: 'Part #4212132 has low inventory level'});
demoTasks.push({task:'063007', date: '07/11/2015' , desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063008', date: '10/11/2015' , desc: 'Part #5212132 has low inventory level'});
demoTasks.push({task:'063009', date: '10/07/2015' , desc: 'Check #212412 parts ordering.'});
demoTasks.push({task:'063010', date: '10/11/2015' , desc: 'Special fields test - New item has been created.'});
demoTasks.push({task:'063011', date: '10/11/2015' , desc: 'Call TMZ Inc at 5 PM'});
demoTasks.push({task:'063012', date: '07/08/2015' , desc: 'Part #6212132 has low inventory level'});

// Execute Page Code for Demo Page
$(function($) {

  var theme = $('#theme').val();

  //Change Theme when we select in the Drop Down
  $('#theme').on('change', function() {
    theme = $(this).val();
    //swap style sheets..
    $('body').fadeOut('fast', function() {
      $('#stylesheet').attr('href', '/stylesheets/'+ theme +'.css');
      $(this).fadeIn('fast');
    });
  });

  // Set Initial Theme
  if (theme !==undefined && theme !== 'grey-theme') {
    $('#stylesheet').attr('href', '/stylesheets/'+ theme +'.css');
  }

  // New, Theme, Personalization, Language Changer. TODO: Should this be a plugin?
  $('#page-changer').on('selected', function (e, link) {
    var href = link.attr('href').substr(1);

    link.parent().parent().find('.checkmark').removeClass('checkmark');
    link.parent().addClass('checkmark');

    // Change Theme
    if (link.attr('data-theme')) {
      $('body').fadeOut('fast', function() {
        $('#stylesheet').attr('href', '/stylesheets/'+ link.attr('data-theme') +'.css');
        $(this).fadeIn('fast');
      });

      return;
    }

    // TODO: Change Lang
    if (link.attr('data-lang')) {
      Locale.set(link.attr('data-lang'));
      return;
    }

    // Change Color
    var color = link.attr('data-rgbcolor');
    $('.is-personalizable').css('background-color', color);


  });

  // Message.html View Specifics
  $('#show-application-error').on('click', function() {
      $('body').message({
          title: 'Application Error',
          isError: true,
          message: 'This application has experienced a system error due to the lack of internet access. Please restart the application in order to proceed.',
          buttons: [{
              text: 'Restart Now',
              click: function() {
                  $(this).modal('close');
              },
              isDefault: true
          }]
      });
  });

  $('#show-fileupload-confirmation').on('click', function() {
      $('body').message({
          title: 'File Upload Complete',
          message: 'Your file "<b>photo.png</b>" was sucessfully uploaded to your personal folder and is now public for viewing.',
          buttons: [{
              text: 'Done',
              click: function() {
                  $(this).modal('close');
              },
              isDefault: true
          }]
      });
  });

  $('#show-delete-confirmation').on('click', function() {

    $('body').message({
      title: 'Delete this Application?',
      message: 'You are about to delete this application permanently. Would you like to proceed?',
      buttons: [{
        text: 'No',
        click: function(e, modal) {
          modal.close();
        }
      }, {
        text: 'Yes',
        click: function(e, modal) {
          modal.close();
        },
        isDefault: true
      }]
    });

  });

  // Modal.html View Specifics
  $('#btn-add-comment').on('click', function() {

    $('body').modal({
      title: 'Add a Comment',
      content: '<small class="alert-text">Escalated (2X)</small><br><h3 style="padding: 0px 15px; margin-top: 8px;">Follow up action with HMM Global </h3><p style="padding: 0px 15px">Contact sales representative with the updated purchase <br> '+
          'order before submission.</p><br><label for="dialog-comment" class="audible">Comment</label><textarea name="dialog-comment" id="dialog-comment"></textarea>',
      buttons: [{
        text: 'Cancel',
        click: function(e, modal) {
          modal.close();
        }
      }, {
        text: 'Submit',
        click: function(e, modal) {
          modal.close();
        },
        isDefault: true
      }]
    });

  });

  // Toast.html View Specifics
  var cnt = 0;
  $('#show-toast-message').on('click', function() {

    cnt ++;
    $('body').toast({title: 'Application Offline' + cnt, message: 'This is a Toast message'});

  });


  // Autocomplete.html View Specifics
  // Setup an alternate source for the templated Autocomplete.
  $('#auto-template').autocomplete({
    source: '/api/states?term='
  }).on('selected', function (e, anchor) {
    console.log('Changed to: ' + $(anchor).parent().attr('data-value'));
  });

  // Searchfield.html View Specifics
  function searchfieldCallback(noResultsContent) {
    $('body').toast({
      title: noResultsContent,
      message: 'Show All Results Callback has been triggered'
    });
  }

  // Toast Message Callback for the Default Searchfield
  $('#searchfield').searchfield({
    allResultsCallback: searchfieldCallback,
    source: '/api/states?term='
  });
  $('#searchfield-default').searchfield({
    allResultsCallback: searchfieldCallback
  });

  // Setup an external source for the templated searchfield
  $('#searchfield-template').searchfield({
    source: '/api/states?term='
  }).on('selected', function (e, anchor) {
    console.log('Changed to: ' + $(anchor).parent().attr('data-value'));
  });

  // Run these on 'body.initialized' event
  $('body').on('initialized', function() {

    // Randomize the numbers on the Tabs Counts example
    $('#tabs-counts').find('li > a > .count').each(function() {
      $(this).text((Math.floor(Math.random() * (20 - 0)) + 0) + ' ');
    });

  });

});
