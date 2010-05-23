class HomeController < ApplicationController

  def index
    # read the list of files in the band photos dir
    # and print them to simple array
    path = RAILS_ROOT + '/public/images/photos/band'
    d = Dir.new path 
    @photos = d.map do |n| 
      '/images/photos/band/' + n 
    end
    @photos.shift
    @photos.shift

  end

end
