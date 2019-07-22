require('jquery-datetimepicker');
require('jquery-datetimepicker/jquery.datetimepicker.css');
var Datepicker = Object.getPrototypeOf(app).Datepicker = new Component("datepicker");
// Datepicker.debug = true;
Datepicker.createdAt      = "1.4.15";
Datepicker.lastUpdate     = "1.4.15";
Datepicker.version        = "1";
// Datepicker.loadingMsg     = "This message will display in the console when component will be loaded.";
Datepicker.dateFormat     = {
  'fr' : 'd/m/Y',
  'en' : 'm/d/Y',
}
var lang = $('html').attr('lang') || 'fr';
$.datetimepicker.setLocale(lang);

Datepicker.prototype.onCreate = function(){
  var datepicker = this;
  datepicker.datepicker = (datepicker.datepicker !== undefined) ? datepicker.datepicker : datepicker.getData('datepicker', true);
  datepicker.timepicker = (datepicker.timepicker !== undefined) ? datepicker.timepicker : datepicker.getData('timepicker', true);
  datepicker.inline     = (datepicker.inline !== undefined)     ? datepicker.inline     : datepicker.getData('inline', false);
  datepicker.minDate    = (datepicker.minDate !== undefined)    ? datepicker.minDate    : datepicker.getData('mindate', false);
  datepicker.maxDate    = (datepicker.maxDate !== undefined)    ? datepicker.maxDate    : datepicker.getData('maxdate', false);
  datepicker.startDate  = (datepicker.startDate !== undefined)  ? datepicker.startDate  : datepicker.getData('startdate', false);
  datepicker.mask       = (datepicker.mask !== undefined)       ? datepicker.mask       : datepicker.getData('mask', false);

  datepicker.formatDate = (datepicker.formatDate !== undefined) ? datepicker.formatDate : datepicker.getData('formatdate', Datepicker.dateFormat[lang]);
  if (datepicker.timepicker) {
    datepicker.formatTime = (datepicker.formatTime !== undefined) ? datepicker.formatTime : datepicker.getData('formattime', 'H:i');
    datepicker.format = datepicker.formatDate+' '+datepicker.formatTime;
  } else {
    datepicker.format = datepicker.formatDate;
  }

  var objConfig = {
    timepicker: datepicker.timepicker,
    datepicker: datepicker.datepicker ,
    inline:     datepicker.inline ,
    format:     datepicker.format,
    formatDate: datepicker.formatDate,
    formatTime: datepicker.formatTime,
    minDate:    datepicker.minDate,
    maxDate:    datepicker.maxDate,
    startDate:  datepicker.startDate,
    mask:       datepicker.mask,

    lazyInit:   true,
    weeks: true
  };

  datepicker.$el.datetimepicker(objConfig).datetimepicker('validate');
  if(datepicker.startDate)
    datepicker.$el.val(datepicker.startDate);


  if(Datepicker.debug) console.log('Datepicker has been created \n ',datepicker);
}

Datepicker.prototype.onDestroy = function(){
  var datepicker = this;

  // if(Datepicker.debug) console.log('Datepicker has been destroyed \n ',datepicker);
}

Datepicker.prototype.onResize = function(){
  var datepicker = this;

  // if(Datepicker.debug) console.log('Datepicker has been resized \n ',datepicker);
}
