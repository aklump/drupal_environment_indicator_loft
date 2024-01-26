<!--
id: snippets
tags: ''
-->

# Snippets

## Multiple Environment Setup

_settings.php_

```php
switch (DRUPAL_ENV) {
  case DRUPAL_ENV_DEV:
    $config['environment_indicator.indicator']['bg_color'] = '#0ff';
    $config['environment_indicator.indicator']['fg_color'] = '#000';
    $config['environment_indicator.indicator']['name'] = 'Development';
    break;
  
  case DRUPAL_ENV_STAGING:
    $config['environment_indicator.indicator']['bg_color'] = '#0f0';
    $config['environment_indicator.indicator']['fg_color'] = '#000';
    $config['environment_indicator.indicator']['name'] = 'Test';
    break;
}
```

### For a Demonstration Website

You can use something like the following for demo websites:

_settings.php_

```php
$config['environment_indicator.indicator']['bg_color'] = '#ff7f00';
$config['environment_indicator.indicator']['fg_color'] = '#000';

// Let demo users know their data is not persistent by overriding the message.
$config['environment_indicator.indicator']['override'] = 'Demonstration Website: Your Data May Be Deleted At Any Time';

// Auto fade-out message after this many seconds, on each page request.
$config['environment_indicator.indicator']['autofade'] = 6;

// ... don't want to show on every request, use a cookie to hide for this many
// seconds after showing.  In this example the override message will appear once
// every 10 minutes.
$config['environment_indicator.indicator']['throttle'] = 600;
```

### Showing Dates of Last Git Pull and DB Sync

Here is an idea for showing dates in the label instead of the git branch.  The file _cached_db.txt_ contains an ISO8601 timestamp of when the database was imported from live, so we can report on that date.

```php
/**
 * Implements hook_preprocess_THEME().
 *
 * This hook will add the dates the database was last pulled with ldp, and also
 * the date of the most recent git commit, so assuming the newest the code is.
 */
function my_module_preprocess_environment_indicator(&$vars) {
  $message = ['Live sync:'];
  if (DRUPAL_ENV !== DRUPAL_ENV_DEV) {
    $message[] = 'Code @code,';
  }
  $message[] = 'Content @content';

  $code = '?';
  if (($date_of_last_commit = exec('git log -1 --pretty=tformat:%cI'))) {
    $code = date_create($date_of_last_commit)->format('n/y');
  }

  $content = '?';
  $db_date_file = DRUPAL_ROOT . "/../.live_dev_porter/.cache/statistics.json";
  if (file_exists($db_date_file)) {
    $json = file_get_contents($db_date_file);
    $stats = json_decode($json, TRUE);
    unset($json);
    $date_of_database = $stats['databases']['drupal']['pull']['live']['stop'] ?? NULL;
    if ($date_of_database) {
      $content = date_create($date_of_database)->format('M j');
    }
  }

  $vars['branch'] = t(implode(' ', $message), [
    '@code' => $code,
    '@content' => $content,
  ]);
}
```
