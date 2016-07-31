/*
** From https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
*/
if (typeof Object.create != 'function') {
  // Production steps of ECMA-262, Edition 5, 15.2.3.5
  // Reference: http://es5.github.io/#x15.2.3.5
  Object.create = (function() {
    //Ϊ�˽�ʡ�ڴ棬ʹ��һ������Ĺ�����
    function Temp() {}

    // ʹ�� Object.prototype.hasOwnProperty ����ȫ������ 
    var hasOwn = Object.prototype.hasOwnProperty;

    return function (O) {
      // 1. ��� O ���� Object �� null���׳�һ�� TypeError �쳣��
      if (typeof O != 'object') {
        throw TypeError('Object prototype may only be an Object or null');
      }

      // 2. ʹ������һ���µĶ���Ϊ obj ���ͺ�ͨ��
      //    new Object() ���ʽ����һ���¶���һ����
      //    Object�Ǳ�׼���õĹ�������
      // 3. ���� obj ���ڲ����� [[Prototype]] Ϊ O��
      Temp.prototype = O;
      var obj = new Temp();
      Temp.prototype = null; // ��Ҫ����һ�� O ����ɢ���ã�a stray reference��...

      // 4. ������ڲ��� Properties �������� undefined ��
      //    ��ô�ͰѲ���������������ӵ� obj �ϣ��������
      //    Я��obj ��Properties���������ı�׼���ú���
      //    Object.defineProperties() һ����
      if (arguments.length > 1) {
        // Object.defineProperties does ToObject on its first argument.
        var Properties = Object(arguments[1]);
        for (var prop in Properties) {
          if (hasOwn.call(Properties, prop)) {
            obj[prop] = Properties[prop];
          }
        }
      }

      // 5. ���� obj
      return obj;
    };
  })();
}
