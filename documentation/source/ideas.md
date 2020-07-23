# Other Ideas

## Git date and db pull

Here is an idea for showing dates in the label instead of the git branch.  The file _cached_db.txt_ contains an ISO8601 timestamp of when the database was imported from live, so we can report on that date.

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
          $db_date_file = DRUPAL_ROOT . "/../.loft_deploy/prod/cached_db.txt";
          if (file_exists($db_date_file)) {
            $date_of_database = trim(file_get_contents($db_date_file));
            $content = date_create($date_of_database)->format('n/y');
          }
        
          $vars['branch'] = t(implode(' ', $message), [
            '@code' => $code,
            '@content' => $content,
          ]);
        }
