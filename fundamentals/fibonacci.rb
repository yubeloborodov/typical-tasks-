def fibonacci(n)
  return if n.negative?
  return 0 if n.zero?

  a = 1;
  b = 1;
  i = 3;

  for i in i..n do
    c = a + b
    a = b
    b = c
  end

  return b
end
