# Web Crawling Bootcamp Site

### DEVELOPMENT

install `jekyll` and `bundler`:

    gem install jekyll bundler
    
later install necessary packages:

    bundle install
    
now you are ready to serve the site (it will appear in `http://localhost:4000`):

    bundle exec jekyll serve 

### PRODUCTION

to build static files from jekyll:

    $ docker run --rm \
        -v "$(pwd):/src" \
        -w /src \
        ruby:2.3 \
        sh -c 'bundle install \
            --path vendor/bundle \
            && bundle exec jekyll build'

later copy files to nginx static folder:

    $ mv web /var/www/bootcamp
