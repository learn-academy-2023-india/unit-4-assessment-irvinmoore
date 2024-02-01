# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach
 
  
  #class Bike

  attr_accessor :bike, :model, :wheels, :current_speed

        def initialize(bike)
            @bike = bike
            @model = 'Trek'
            @wheels = 2
            @current_speed = 0
        end

        def tricycle
            @wheels = 3
        end 

        def pedal_faster(speed)
            @current_speed += speed
        end

        def brake(speed)
            @current_speed = [0, @current_speed - speed].max
        end

        def bike_info
            "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
        end
