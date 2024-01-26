<!--
id: installing
tags: ''
-->

# Installing

1. Add the following to your project's root _composer.json_.
   ```json
   {
     "repositories": [
       {
         "type": "github",
         "url": "https://github.com/aklump/drupal_environment_indicator_loft"
       }
     ]
   }
   ```
2. `composer require aklump_drupal/environment_indicator_loft`
3. `drush en environment_indicator_loft`

Next step [configuring](@configuring).
