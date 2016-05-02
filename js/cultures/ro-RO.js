(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/pt-BR', ['jquery'], factory);
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
  Locale.addCulture('ro-RO', {
    //layout/language
    language: 'ro',
    englishName: 'Romanian (Romania)',
    nativeName: 'română (România)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'dd.MM.yyyy', //use four digit year
                   'medium': 'd MMM yyyy',
                   'long': 'd MMMM yyyy',
                   'full': 'EEEE, d MMMM yyyy',
                   'month': 'd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH:mm:ss',
                   'datetime': 'dd.MM.yyyy HH:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
         abbreviated: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
         narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
        abbreviated: ['ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['a.m.', 'p.m.']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'lei', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: '.'
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Drepturi de autor &copy; {0} Infor. Toate drepturile rezervate. Grupul de simboluri şi mărcile de design menţionate în acest document sunt mărci comerciale şi/sau mărci comerciale înregistrare ale Infor şi/sau ale afiliaţilor şi filialelor sale. Toate drepturile rezervate. Toate celelalte mărci comerciale menționate în acest document aparţin proprietarilor lor.'},
      'Actions': {id: 'Actions', value: 'Acţiuni', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Adăugare', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Creare filtru avansat', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Alertă', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Toate rezultatele pentru', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Aliniere jos', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Aliniere orizontală la centru', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Chihlimbar', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Ametist', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Aplicare', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Ataşare', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Azur', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Între', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Citat', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Aldin', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Marcat', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Marcaţi aceasta', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Marcaj traseu navigare', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Listă cu marcatori', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Calendar', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Aparat foto', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Revocare', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock activat', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Coş', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Centrare', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Caractere rămase ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Numărul maxim de caractere ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Pentru a modifica selecţia, utilizaţi tastele săgeată.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Casetă de validare', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Bifat', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Golire', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Ceas', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Închidere', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Copiere', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Restrângere', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Restrângere bară de aplicaţii', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Coloane', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Compunere', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Finalizat', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Confirmare', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Conţine', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Decupare', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Dată', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Ştergere', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Distribuire pe orizontală', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Document', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Detaliere', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Cumulare', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Listă verticală', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Nu conţine', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Nu este egal cu', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Jos', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Descărcare', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Dublare', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Selectat sau neselectat', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Introduceți comentarii aici...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Eroare', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'Adresă de e-mail incorectă', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smarald', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Extindere', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Extindere bară de aplicaţii', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Extindere/restrângere', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Export ca foaie de calcul', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Editare', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Este egal cu', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Ieşire vizualizare completă', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Export', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Încărcare fişier apăsaţi pe Enter pentru a răsfoi după un fişier', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filtru', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Prima pagină', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Folder', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Vizualizare completă', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Înainte', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Înapoi', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Jos', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Sus', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Mai mare sau egal cu', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Mai mare decât', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Grilă', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Ore', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Antet trei', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Antet patru', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Cel mai mare', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Pagină de pornire', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Vizualizare HTML', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Import', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Informaţii', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Inserare ancoră', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Inserare imagine', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Cursiv', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Dată incorectă', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Inventar', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Este gol', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Nu este gol', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Aliniere la centru', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Aliniere la stânga', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Aliniere la dreapta', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Cuvânt cheie', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Lansare', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Ultima pagină', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Stânga', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Mai mic sau egal cu', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Mai mic decât', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Legătură', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Încărcare', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Se încarcă', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Blocat', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Căutare', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Cel mai mic', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'E-mail', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Marcaj hartă', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Maximizare', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Median', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Mediu', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Meniu', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Partajare cu Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minute', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Minimizare', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Minus', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Mai multe...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Mai multe acţiuni', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Modificat', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Selectare multiplă cu ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Document nou', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Următor', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Pagina următoare', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Luna următoare', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Niciun rezultat', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Note', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Neselectat', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Listă numerotată', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Deschidere/înapoi/închidere', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Deschidere/închidere', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Listă ordonată', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'pagina ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Pagina {0} din {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Sunteţi la pagina ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Lipire', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>Parola trebuie:</strong><ul><li>să fie alcătuită din cel puţin 10 caractere</li><li>să conţină cel puţin un caracter majusculă</li><li>să conţină cel puţin un caracter minusculă</li><li><strong>să conţină un caracter special</strong></li><li>să nu conţină numele tău de utilizator</li><li>să nu fie o parolă utilizată anterior</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Parola trebuie să se potrivească', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Vârf', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Personalizare coloane', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Perioadă', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Apăsaţi mai jos pentru a selecta o dată', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Apăsaţi Shift+F10 pentru a deschide meniul contextual.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Anterior', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Luna anterioară', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Pagina anterioară', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Imprimare', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Interval', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} Înregistrări pe pagină', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Refacere', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Reîmprospătare', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Obligatoriu', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Resetare', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Rezultate', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Dreapta', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Aliniere la dreapta', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Aliniere text la dreapta', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Roluri', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Înălţime rând', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubin', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Salvare', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Salvare vizualizare curentă', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Vizualizări salvate', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Căutare', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Folder de căutare', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Listă de căutare', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Selectat', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Trimitere', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Setare oră', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Setări', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Mică', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Ardezie', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Identificator pentru', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Identificator interval maxim pentru', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Identificator interval minim pentru', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Salt la conţinutul principal', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Tăiere text', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Sortare de la A la Z', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Sortare de la Z la A', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Sortare descrescătoare', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Sortare crescătoare', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Indice', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Exponent', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Piuneză', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Mare', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Cronometru', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Astăzi', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Comutare text aldin', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Comutare antet 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Comutare antet 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Comutare text cursiv', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Comutare text subliniat', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Bară de instrumente', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Aliniere sus', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Restrângere arbore', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Extindere arbore', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Turcoaz', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Sus', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Încărcare', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Dată indisponibilă', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Subliniere', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Anulare', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Deblocat', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Listă neordonată', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Acest conţinut nu este disponibil, deoarece foloseşte caracteristici neacceptate în versiunea curentă a browserului tău.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Utilizaţi tastele săgeată pentru a selecta.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Utilizaţi Enter sau săgeată jos pentru a căuta.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Utilizator', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Profil utilizator', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Aliniere verticală la mijloc', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Vizualizare sursă', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Vizualizare imagine', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
