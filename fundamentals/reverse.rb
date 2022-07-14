def reverse(string)
  result = ''
  length = string.length

  while length > 0
    length -= 1
    result += string[length]
  end

  return result
end


puts(reverse('qwerty'))