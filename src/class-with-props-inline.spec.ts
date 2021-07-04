// No errors when defining a class within a test file

class ClassWithPropsInline {
  prop = '1'
}

new ClassWithPropsInline();
  
it('fails', () => {})