<!--
id: troubleshooting
tags: ''
-->

# Troubleshooting

## Not Seeing the Indicator?

Any of the following will prevent the border from showing:

1. _Environment Indicator Loft_ is not enabled.
2. _Toolbar_ integration is enabled (checked) as seen at /admin/config/development/environment-indicator
3. The user viewing the site does not have the permission _See environment indicator..._
4. `$config['environment_indicator.indicator']['name']` is set to an empty value.
