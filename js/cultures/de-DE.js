(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/de-DE', ['jquery'], factory);
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
  Locale.addCulture('de-DE', {
    //layout/language
    language: 'de',
    englishName: 'German (Germany)',
    nativeName: 'Deutsch (Deutschland)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'dd.MM.yyyy', //use four digit year
                   'medium': 'dd.MM.yyyy',
                   'long': 'd. MMMM yyyy',
                   'full': 'EEEE, d. MMMM y',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH:mm:ss',
                   'datetime': 'dd.MM.yyyy HH:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated
      days: {
        wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        abbreviated: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr','Sa'],
        narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
            //ca-gregorian/main/dates/calendars/gregorian/months/format/wide and abbreviated
      months: {
        wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/abbreviated
      dayPeriods: ['vorm.', 'nachm.'] //Not used 24h
    }],
    //numbers/currencyFormats-numberSystem-latn/standard
    currencySign: '€',  //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: '.'
    },
    //Resx
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. Alle Rechte vorbehalten. Die hier aufgelisteten Wort- und Designmarken sind Markenzeichen und/oder geschützte Marken der Infor und/oder verbundener Unternehmen. Alle Rechte vorbehalten. Alle anderen hier genannten Markenzeichen sind das Eigentum der betreffenden Unternehmen.'},
      'Actions': {id: 'Actions', value: 'Aktionen', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Hinzufügen', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Erweiterten Filter erstellen', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Benachrichtigung', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Alle Ergebnisse für', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Unten ausrichten', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Horizontal zentrieren', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Bernstein', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Amethyst', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Übernehmen', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Anhängen', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Azur', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Zwischen', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Blockzitat', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Fett', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Als Lesezeichen hinzugefügt', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Als Lesezeichen hinzufügen', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Breadcrumb', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Aufzählung', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Abbrechen', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Feststelltaste ein', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Warenkorb', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Zentrieren', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Zeichen verbleiben ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Maximal mögliche Zeichen: ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Verwenden Sie die Pfeiltasten, um die Auswahl zu ändern.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Kontrollkästchen', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Markiert', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Löschen', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Uhr', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Schließen', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Kopieren', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Ausblenden', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'App-Bereich ausblenden', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Spalten', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Verfassen', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Abgeschlossen', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Bestätigen', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Enthält', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Ausschneiden', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Datum', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Löschen', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Horizontal verteilen', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Dokument', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Drill-Down', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Drill-Up', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Dropdownliste', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Enthält nicht', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Ungleich', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Pfeil nach unten', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Herunterladen', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Duplizieren', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Ausgewählt/Nicht ausgewählt', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Kommentare hier eingeben...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Fehler', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'E-Mail-Adresse ungültig', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smaragd', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Erweitern', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'App-Bereich erweitern', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Erweitern/Ausblenden', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Als Tabelle exportieren', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Bearbeiten', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Gleich', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Vollbild verlassen', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Exportieren', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Datei hochladen Drücken Sie die Eingabetaste, um nach einer Datei zu suchen', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filter', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Erste Seite', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Ordner', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Vollbild', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Vorwärts', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Zurück', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Nach unten', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Nach oben', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Graphit', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Größer als oder gleich', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Größer als', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Raster', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Stunden', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Überschrift 3', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Überschrift 4', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Höchste', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Startseite', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'HTML-Ansicht', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Importieren', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Info', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Textmarke einfügen', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Bild einfügen', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Kursiv', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Ungültiges Datum', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Inventar', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Ist leer', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Ist nicht leer', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Zentrieren', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Linksbündig ausrichten', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Rechtsbündig ausrichten', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Schlüsselwort', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Starten', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Letzte Seite', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Pfeil nach links', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Kleiner als oder gleich', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Kleiner als', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Laden', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Laden...', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Gesperrt', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Abfrage', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Niedrigste', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'E-Mail', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Stecknadel', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Maximieren', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Median', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Mittel', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menü', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'In Ming.le veröffentlichen', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minuten', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Minimieren', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Minus', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Mehr...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Mehr Aktionen', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Geändert', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Multiselect with ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Neues Dokument', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Weiter', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Nächste Seite', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Nächster Monat', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Keine Ergebnisse', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Kommentare', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Nicht ausgewählt', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Aufzählung', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Öffnen / Zurück / Schließen', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Öffnen / Schließen', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Sortierte Liste', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'Seite ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Seite {0} von {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Sie befinden sich auf Seite ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Einfügen', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>Das Kennwort muss die folgenden Bedingungen erfüllen:</strong><ul><li>Es muss mindestens 10 Zeichen umfassen</li><li>Es muss mindestens einen Großbuchstaben enthalten</li><li>Es muss mindestens einen Kleinbuchstaben enthalten</li><li><strong>Es muss ein Sonderzeichen enthalten</strong></li><li>Es darf nicht Ihr Benutzername sein</li><li>Es darf kein zuvor verwendetes Kennwort sein</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Kennwörter müssen übereinstimmen', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Höchstwert', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Spalten individualisieren', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Zeitraum', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Drücken Sie Pfeil nach unten, um ein Datum auszuwählen', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Drücken Sie Umschalttaste+F10, um das Kontextmenü zu öffnen.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Zurück', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Monat zurück', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Vorherige Seite', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Drucken', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Bereich', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} Datensätze pro Seite', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Wiederherstellen', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Aktualisieren', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Obligatorisch', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Zurücksetzen', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Ergebnisse', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Pfeil nach rechts', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Rechtsbündig ausrichten', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Rechtsbündig ausrichten', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Rollen', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Zeilenhöhe', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubin', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Speichern', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Aktuelle Ansicht speichern', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Gespeicherte Ansichten', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Suchen', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Ordner durchsuchen', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Liste durchsuchen', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Ausgewählt', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Senden', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Zeit eingeben', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Einstellungen', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Klein', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Schiefer', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Ziehpunkt für', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Höchstwertziehpunkt für', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Mindestwertziehpunkt für', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Zu Inhalt springen', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Durchgestrichen', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Aufsteigend sortieren', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Absteigend sortieren', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Absteigend sortieren', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Aufsteigend sortieren', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Tiefgestellt', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Hochgestellt', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Nadel', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Groß', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Timer', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Heute', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Fett ein/aus', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Überschrift 3 ein/aus', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Überschrift 4 ein/aus', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Kursiv ein/aus', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Unterstrichen ein/aus', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Symbolleiste', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Oben ausrichten', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Gesamt', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Struktur ausblenden', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Struktur erweitern', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Türkis', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Pfeil nach oben', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Hochladen', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Nicht verfügbares Datum', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Unterstrichen', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Rückgängig machen', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Nicht gesperrt', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Unsortierte Liste', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Der Inhalt ist nicht verfügbar, da einige Funktionen in Ihrer aktuellen Browser-Version nicht unterstützt werden.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Verwenden Sie die Pfeiltasten zum Auswählen.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Verwenden Sie die Eingabetaste oder Pfeil nach unten für die Abfrage.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Benutzer', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Benutzerprofil', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Vertikal zentrieren', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Quelle anzeigen', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Objekt anzeigen', comment: 'Toggle the visual view in the editor'}
    }
  });

}));
