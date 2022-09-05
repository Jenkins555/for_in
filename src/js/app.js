const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function orderByProps(object, args) {
  const objKeys = Object.entries(obj); // + Преобразуем объект в массив
  const nonSortArray = [];/// определяем переменную массива
  /// 1.Создать массив, исклчающий значения входящего массива
  /// console.log(args);
  args.forEach((arg) => nonSortArray.push(objKeys.filter((el) => el.includes(arg))));
  /// console.log(nonSortArray);
  /// for(let arg in args) { /// фильтруем и добавляем элементы в массив
  ///  nonSortArray.push(objKeys.filter(el => el.includes(args[arg])))
  ///    }
  const merge = [].concat.apply([], nonSortArray); // Избавляемся от вложенных массивов
  /// console.log(merge);
  /// 2.Создать фильтр массива объектов по алфавиту
  const abcSortArray = objKeys.sort().filter((el) => el.includes('health') || el.includes('attack') || el.includes('defence')); /// Сортировка по алфавиту
  /// console.log(abcSortArray);
  /// 3. Объединить массивы
  const arrConcat = merge.concat(abcSortArray);
  return Object.fromEntries(arrConcat); /// Возвращаем объект, созданный из объединённых массивов
}

orderByProps(obj, ['name', 'level']); /// Вызов функции сортировки с заданными свойствами
/// console.log(orderByProps(obj, ['name', 'level']));
