# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach
 
  
  #class Bike
    #attr_accessor :real, :model, :wheels, :speed
  
    #def initialize(model)
      #@real = true
      #@model = model
      #@wheels = 2
      #@speed = 0
    #end
  
    #def become_tricycle
      #@wheels = 3
    #end
  
    #def increase_speed(amount)
      #@speed += amount
    #end
  
    #def decrease_speed(amount)
      #@speed -= amount
      #@speed = 0 if @speed < 0
    #end
  
    #def log_data
      #"Model: #{@model}, Wheels: #{@wheels}, Speed: #{@speed}"
    #end
  #end
 
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
