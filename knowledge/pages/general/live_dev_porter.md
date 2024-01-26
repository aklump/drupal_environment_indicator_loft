<!--
id: live_dev_porter
tags: ''
-->

# Configuring with Live Dev Porter

This page refers to usage with [Live Dev Porter](https://github.com/aklump/live_dev_porter)

## Processor

```php
# Handle the configuration of development modules.
! lando drush en environment_indicator_loft -y && echo "Failed to enable development modules." && exit 1
lando drush role-add-perm anonymous 'access environment indicator'
lando drush role-add-perm authenticated 'access environment indicator'
```
