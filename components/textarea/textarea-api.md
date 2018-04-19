<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Textarea][1]
    -   [enable][2]
    -   [disable][3]
    -   [isDisabled][4]
    -   [readonly][5]
    -   [updated][6]
    -   [destroy][7]
    -   [handleEvents][8]

## Textarea

The Textarea Component wraps a standard HTML Textarea element and provides additional features.

**Parameters**

-   `element` **[object][9]** The component element.
-   `settings` **[object][9]?** The component settings.
    -   `settings.autoGrow` **[boolean][10]** Will automatically expand the textarea to fit the contents when typing. (optional, default `false`)
    -   `settings.autoGrowAnimate` **[boolean][10]** Will animate the textarea grow. (optional, default `true`)
    -   `settings.autoGrowAnimateSpeed` **[number][11]** The speed of the animation. (optional, default `200`)
    -   `settings.characterCounter` **[boolean][10]** Displays a counter that counts down from the maximum
        length allowed. (optional, default `true`)
    -   `settings.printable` **[boolean][10]** Determines whether or not the text area can be displayed on a
        printed page. (optional, default `true`)
    -   `settings.charRemainingText` **(null | [String][12])** Text that will be used in place of the "remaining"
        text defaulting to a localized 'Characters Left'. (optional, default `'Characters Left'`)
    -   `settings.charMaxText` **(null | [String][12])** Text that will be used in place of the "Max" text.
        Defaults to a localized Version of 'Character count maximum of'. (optional, default `'Character count maximum of'`)

### enable

Enables this component instance.

### disable

Disables this component instance.

### isDisabled

Returns true if the texarea is disabled

Returns **[boolean][10]** True if the elemet is disabled.

### readonly

Sets this component instance to "readonly"

### updated

Call whenever the plugin's settings are changed

**Parameters**

-   `settings` **[object][9]** The settings object.

### destroy

Destroys this component instance and unlinks it from its element.

### handleEvents

This component fires the following events.

**Parameters**

-   `keyup` **[object][9]** Fires when the button is clicked (if enabled).
-   `focus` **[object][9]** Fires when the menu is focused.
-   `keypress` **[object][9]** Fires when pressing a key.
-   `blur` **[object][9]** Fires when leaving the field.

[1]: #textarea

[2]: #enable

[3]: #disable

[4]: #isdisabled

[5]: #readonly

[6]: #updated

[7]: #destroy

[8]: #handleevents

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String