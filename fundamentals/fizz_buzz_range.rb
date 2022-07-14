def fizz_buzz(start, stop)
  return if start > stop
	
  result = ''
  for i in start..stop do 
    if i % 3 == 0 && i % 5 == 0
      result += 'FizzBuzz '
    elsif i % 3 == 0
      result += 'Fizz '
    elsif i % 5 == 0
      result += 'Buzz '
    else
      result += "#{i} "
    end
  end

  return result.strip
end
