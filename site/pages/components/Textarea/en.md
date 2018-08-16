# Textarea

<example />

## API

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| autosize | bool | false | Whether the height changes automatically with the content |
| defaultValue | string \| number | | default value |
| delay | number | 400 | User input triggers onChange and to check interval, unit: ms.|
| name | string | none | The name that accesses data from Form |
| onChange | function(d) | | The callback function for changing value |
| placeholder | string | | The same as the native placeholder tag. |
| popover | string | | The position where the message pops up, options: \['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |
| rows | number | 4 | The minimum row height. Same as native textarea rows property. |
| style | object | none | extend style |
| tip | string \| ReactElement | | Prompt message |
| value | string \| number | | DefaultValue and value can be set at the same time and defaultValue will be overridden by value. <br />In the Form, the value is taken over by the Form and lose efficacy. |
