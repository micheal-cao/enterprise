(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/he-IL', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('he-IL', {
    //layout/language
    language: 'he',
    englishName: 'Hebrew (Israel)',
    nativeName: 'עברית (ישראל)',
    //layout/orientation/@characters
    direction: 'right-to-left',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'dd/MM/yyyy', //use four digit year
                   'medium': 'd בMMM yyyy',
                   'long': 'd בMMMM yyyy',
                   'full': 'EEEE, d בMMMM yyyy',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH:mm:ss',
                   'datetime': 'dd/MM/yyyy HH:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['יום ראשון','יום שני','יום שלישי','יום רביעי','יום חמישי','יום שישי','יום שבת'],
         abbreviated: ['יום א׳','יום ב׳', 'יום ג׳','יום ד׳', 'יום ה׳','יום ו׳','שבת'],
         narrow: ['א׳','ב׳','ג׳','ד׳','ה׳','ו׳','ש׳']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
        abbreviated: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['לפנה״צ', 'אחה״צ']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '₪', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: '.',
      group: ','
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'זכויות יוצרים &copy; {0} Infor. כל הזכויות שמורות. סימני המילים והעיצוב המתוארים במסמך הם סימני מסחר ו/או סימני מסחר רשומים של Infor ו/או של חברות מסונפות או חברות-בנות. כל הזכויות שמורות. כל שאר סימני המסחר המצוינים במסמך הם רכושם של בעליהם, בהתאמה.'},
      'Actions': {id: 'Actions', value: 'פעולות', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'הוסף', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'צור מסנן מתקדם', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'התראה', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'כל התוצאות עבור', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'ישר לקצה התחתון', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'יישור אופקי למרכז', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'ענבר', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'אמתיסט', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'החל', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'צרף', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'תכלת', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'בין', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'בלוק ציטוט', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'מודגש', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'מסומן בסימנייה', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'סמן את זה בסימנייה', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'סימני דרך', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'רשימה עם תבליטים', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'לוח שנה', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'מצלמה', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'ביטול', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock פועל', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'עגלה', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'מרכז', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'תווים שנותרו ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'ספירת תווים מרבית של ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. כדי לשנות את הבחירה, השתמש במקשי החצים.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'תיבת סימון', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'מסומן', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'נקה', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'שעון', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'סוג', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'העתק', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'כווץ', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'כווץ מגש יישומים', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'עמודות', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'חבר', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'הושלם', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'אשר', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'מכיל', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'גזור', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'תאריך', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'מחק', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'פזר אופקית', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'מסמך', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'בצע הסתעפות', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'כנס', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'רשימה נפתחת', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'אינו מכיל', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'אינו שווה ל-', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'למטה', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'הורד', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'שכפל', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'נבחר או לא נבחר', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'הזן הערות כאן...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'שגיאה', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'כתובת דואר אלקטרוני אינה תקפה', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'ברקת', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'הרחב', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'הרחב מגש יישומים', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'הרחב/כווץ', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'יצא כגיליון אלקטרוני', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'ערוך', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'שווה ל-', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'צא מתצוגה מלאה', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'יצא', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'העלאת קובץ לחץ על Enter כדי לחפש קובץ', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'סנן', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'דף ראשון', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'תיקייה', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'תצוגה מלאה', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'עבור קדימה', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'חזור אחורה', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'עבור למטה', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'עבור למעלה', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'גרפיט', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'גדול או שווה ל-', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'גדול מ-', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'רשת', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'שעות', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'כותרת 3', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'כותרת 4', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'הגבוה ביותר', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'דף הבית', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'תצוגת Html', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'יבא', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'מידע', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'הכנס עוגן', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'הכנס תמונה', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'נטוי', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'תאריך לא חוקי', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'מלאי', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'ריק', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'אינו ריק', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'ישר למרכז', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'ישר שמאלה', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'ישר ימינה', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'מילת מפתח', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'הפעל', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'דף אחרון', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'שמאל', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'קטן או שווה ל-', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'קטן מ-', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'קישור', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'טען', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'טוען', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'נעול', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'בדיקת מידע', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'הנמוך ביותר', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'דואר', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'נעץ במפה', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'הגדל', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'חציון', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'אמצעי', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'תפריט', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'שתף עם Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'דקות', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'מזער', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'חיסור', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'עוד...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'פעולות נוספות', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', השתנה', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Multiselect עם ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'מסמך חדש', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'הבא', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'הדף הבא', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'החודש הבא', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'אין תוצאות', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'הערות', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'לא נבחר', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'רשימת מספרים', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'פתח / הקודם / סגור', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'פתח / הקודם / סגור', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'רשימה מסודרת', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'דף ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'דף {0} מתוך {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'אתה נמצא כרגע בדף ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'הדבק', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>הסיסמה חייבת:</strong><ul><li>להיות באורך 10 תווים לפחות</li><li>להכיל לפחות אות רישית אחת</li><li>להכיל לפחות אות קטנה אחת</li><li><strong>להכיל תו מיוחד אחד</strong></li><li>לא להכיל את שם המשתמש שלך</li><li>אינה יכולה להיות סיסמה שבה השתמשת בעבר</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'הסיסמה חייבת להיות תואמת', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'שיא', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'התאם אישית עמודות', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'תקופה', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'לחץ למטה כדי לבחור תאריך', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'לחץ על Shift+F10 כדי לפתוח את תפריט ההקשר.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'הקודם', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'החודש הקודם', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'הדף הקודם', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'הדפס', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'טווח', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} רשומות לעמוד', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'בצע שוב', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'רענן', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'נדרש', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'איפוס', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'תוצאות', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'ימין', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'ישר לימין', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'ישר טקסט לימין', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'תפקידים', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'גובה שורה', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'אבן אודם', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'שמור', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'שמור תצוגה נוכחית', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'תצוגות שמורות', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'חיפוש', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'תיקיית חיפוש', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'רשימת חיפוש', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'נבחר', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'שלח', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'קבע שעה', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'הגדרות', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'קצר', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'צפחה', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'מזהה ייחודי של', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'מזהה ייחודי של טווח מקסימלי של', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'מזהה ייחודי של טווח מינימלי של', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'דלג לתוכן ראשי', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'קו חוצה', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'מיון A עד Z', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'מיון Z עד A', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'מיון למטה', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'מיון למעלה', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'כתב תחתי', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'כתב עילי', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'נעץ', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'גבוה', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'שעון עצר', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'היום', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'החלף מצב טקסט מודגש', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'החלף מצב כותרת 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'החלף מצב כותרת 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'החלף מצב טקסט בכתב נטוי', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'החלף מצב טקסט בקו תחתון', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'סרגל כלים', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'ישר לקצה העליון', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'סה"כ', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'כווץ עץ', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'הרחב עץ', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'טורקיז', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'למעלה', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'העלה', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'תאריך לא זמין', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'קו תחתון', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'בטל', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'לא נעול', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'רשימה לא מסודרת', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'התוכן אינו זמין מכיוון שהוא משתמש בתכונות שאינן נתמכות בגרסת הדפדפן הנוכחית שלך.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'כתובת URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. לבחירה, השתמש במקשי החצים.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. לחיפוש, השתמש ב-Enter או בחץ למטה.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'משתמש', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'פרופיל משתמש', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'יישור אנכי, אמצע', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'הצג מקור', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'הצג עזר חזותי', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
