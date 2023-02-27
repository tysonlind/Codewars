function add (a, b) {
    let result = ''
    let combine = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || combine) {
      combine += ~~a.pop() + ~~b.pop()
      result = combine % 10 + result
      combine = combine > 9
    }
    return result
  }
  console.log(add('9983432984289347293874', '90938498237058927340892374089'));