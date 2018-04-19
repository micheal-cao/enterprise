<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Pager][1]
    -   [showPageSizeSelector][2]
    -   [setActivePage][3]
    -   [updated][4]
    -   [updatePagingInfo][5]
    -   [destroy][6]

## Pager

The Pager Component supports paging on lists.

**Parameters**

-   `element` **([Array][7]&lt;jQuery> | [HTMLElement][8])** The component element.
-   `settings` **[object][9]?** The component settings.
    -   `settings.componentAPI` **[string][10]?** If defined, becomes the definitive way to call methods on
        parent component.
    -   `settings.type` **[string][10]** Different types of pagers list - just shows next and Previous and a listing of pages table
        shows next and previous and first and last with a page number input and page size selector used as the default
        for datagrid pageof - also shows next and previous and first and last with a page number input and page size selector used optionally for
        lists firstlast - shows next and previous and first and last with option to set showPageSizeSelector (optional, default `'list'`)
    -   `settings.position` **[string][10]** Can be on 'bottom' or 'top'. (optional, default `'bottom'`)
    -   `settings.activePage` **[number][11]** Start on this page (optional, default `1`)
    -   `settings.hideOnOnePage` **[boolean][12]** If true, hides the pager if there is only one page worth of results. (optional, default `false`)
    -   `settings.source` **[Function][13]?** Call Back Function for Pager Data Source
    -   `settings.pagesize` **[number][11]** Can be calculated or a specific number (optional, default `15`)
    -   `settings.pagesizes` **[array][7]** Array of numbers of the page size selector (optional, default `[15,25,50,75]`)
    -   `settings.showPageSizeSelector` **[boolean][12]** If false will not show page size selector (optional, default `false`)
    -   `settings.indeterminate` **[boolean][12]** If true will not show anything that lets you go to a specific (optional, default `false`)

### showPageSizeSelector

Show page size selector

**Parameters**

-   `toggleOption` **[boolean][12]** Toggle vs show

### setActivePage

Set or Get Current Page.

**Parameters**

-   `pagingInfo` **[object][9]** The paging info object
-   `force` **[boolean][12]** Force the update
-   `op` **[string][10]** The paging operation type.

Returns **void** 

### updated

Update the component and optionally apply new settings.

**Parameters**

-   `settings` **[object][9]** the settings to update to.

Returns **[object][9]** The plugin api for chaining.

### updatePagingInfo

Updates this instance of pager with externally-provided settings.

**Parameters**

-   `pagingInfo` **[object][9]** contains settings that will change buttons on the pager.
    -   `pagingInfo.pagesize` **[number][11]** the number of items visible per page
    -   `pagingInfo.total` **[number][11]** the total number of pages
    -   `pagingInfo.activePage` **[number][11]** the currently visible page
    -   `pagingInfo.firstPage` **[boolean][12]** passed if the currently visible page is the
        first one (optional, default `false`)
    -   `pagingInfo.lastPage` **[boolean][12]** passed if the currently visible page is the
        last one (optional, default `false`)
    -   `pagingInfo.hideDisabledPagers` **[boolean][12]** causes the pager to become completely
        hidden if all buttons are disabled (optional, default `false`)

Returns **void** 

### destroy

Tear down and detatch all events

[1]: #pager

[2]: #showpagesizeselector

[3]: #setactivepage

[4]: #updated

[5]: #updatepaginginfo

[6]: #destroy

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[8]: https://developer.mozilla.org/docs/Web/HTML/Element

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function