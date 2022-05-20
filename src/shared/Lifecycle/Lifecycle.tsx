import React from 'react';
import styles from './lifecycle.css';

interface ILifecycleProps {
  someProp?: number;
}
interface ILifecycleState {
  stateField: number;
  isMounted: boolean; 
  hasError: boolean;
}

// Пример жизненного цикла компонента, методы.
export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {

  // 
  constructor(props: ILifecycleProps) {
    super(props); 

    this.state = { stateField: 0, isMounted: false, hasError: false }; // Задаем состояние
    // this.handleClick = this.handleClick.bind(this) // биндим контекст
  }


    // Метод getDerivedStateFromProps Вызывается при маунте компонент и при re-render
  static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
    // return { stateField: props.someProp } // Возвращает объект в котором описано состояние которое необходимо обновить перед рендером приложения
    return null // Возвращаем null, если нет необходимости что-то менять
  }


    // Методы связанные с обработкой ошибок*
    // Метод getDerivedStateFromError Вызывается во время этапа render. 
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }


    // Метод shouldComponentUpdate.  React.Component - всегда возвращает true. Весь компонент будет обновляться.
    // В случае React.PureComponent - сравнивает поверхности текущие состояния и пропы, в случае отличия возвращает true
    // Не использовать при PureComponent 
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContent: any,
  ): boolean {

    return true; // Так реализовано в React.Component
    // return this.state != nextState || this.props != nextProps; // Так реализовано в React.PureComponent
    //  return false; // При false компонент не будет ререндера, включая дочерние компоненты

  }


    // обязательный метод render в класс компоненте 
  public render() {
    // Пример для понимания работы метода getDerivedStateFromError
    if (this.state.hasError) {
      return <div>Error</div>
    }
    return <div onClick={this.handleClick}> {this.state.stateField} test</div>
  }

    //  На такой метод нужен бинд контекста, может возвращать не только JSX
  // private handleClick () {
  //   this.this.setState( { stateField: 1})
  // }

    // На стрелочную функцию бинд контекста ненужен 
    private handleClick = () => {
      this.setState( { stateField: 1})
    }


    // Метод getSnapshotBeforeUpdate. Вызывается перед тем как компонент обновится. Можем сохранить высоту скролла, высоту окна.
  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ): any | null {
    // return 1234;
    return null;
  }


    // Метод ComponentDidUpdate связанный метод с getSnapshotBeforeUpdate. Принимает snapshot то что возвращается с getSnapshotBeforeUpdate 
    // Метод вызывается после того как компонент обновился
  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any,
  ){
    // Пример 
    if (snapshot > 1000){ // Условие для того чтобы не застрять в бесконечном цикле обновления
      this.setState({})
    }
  }


    // Метод componentDidMount Вызывается сразу после того как компонент монтируется в DOM дерево. Создан для сайдефектов, подписок, таймеров, счетчиков, и.т.д.
  public componentDidMount() {
      // Примеры
    // document.addEventListener('resize', () => {});
    // setTimeout (() => { });
    // this.setState({isMounted: true}) // Меняется значение состояния isMounted: true, после того как компонент внедрен в DOM 
  }


    // Методы связанные с обработкой ошибок*
    // Метод componentDidCatch. Необходим для запуска сайдефектов при получении ошибки.
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // Пример
      // logError(errorInfo.componentStack) Какой-либо сервис для логирования
    }


    // Метод componentWillUnmount Вызывается перед тем как компонент удалится из DOM дерева. Создан для отписывания от подписок, обновлять таймеры
  public componentWillUnmount() {
      // Примеры
    // document.removeEventListener('resize', () => {});
  }


}
