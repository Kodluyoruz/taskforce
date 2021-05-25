# Kendi Liste Sınıfımızı Yazmak

```java
import java.util.Arrays;
public class Must<T> {
    private T[] list;
    private static final int DEFAULT_CAPACITY = 10;
    private int size = 0;

    public Must() {
        this.list = (T[]) new Object[DEFAULT_CAPACITY];
    }

    public Must(int capacity) {
        this.list = (T[]) new Object[capacity];
    }

    public void add(T e) {
        if (this.size == list.length) {
            increaseCapacity();
        }
        list[size++] = e;
    }

    private void increaseCapacity() {
        int newSize = this.list.length * 2;
        this.list = Arrays.copyOf(this.list, newSize);
    }

    public T get(int index) {
        if (index >= size || index < 0) {
            System.out.println("Geçersiz index girdiniz !");
            return null;
        }

        return this.list[index];
    }

    public T remove(int index) {
        if (index >= size || index < 0) {
            System.out.println("Geçersiz index girdiniz !");
            return null;
        }
        T item = this.list[index];
        if (this.list.length - 1 - index >= 0)
            System.arraycopy(this.list, index + 1, this.list, index, this.list.length - 1 - index);
        size--;
        return item;
    }

    public T set(int index, T s) {
        if (index >= size || index < 0) {
            System.out.println("Geçersiz index girdiniz !");
            return null;
        }

        this.list[index] = s;
        return s;
    }

    public String toString() {
        String out = "[";
        for (int i = 0; i < size; i++) {
            out += this.list[i].toString();
            if (i < size - 1) {
                out += ",";
            }
        }
        out += "]";
        return out;
    }

    public int indexOf(T t) {
        for (int i = 0; i < size; i++) {
            if (t.equals(this.list[i])) {
                return i;
            }
        }
        return -1;
    }

    public int lastIndexOf(T t) {
        for (int i = size - 1; i >= 0; i--) {
            if (t.equals(this.list[i])) {
                return i;
            }
        }
        return -1;
    }


    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public Must<T> subList(int fromIndex, int toIndex) {
        if (fromIndex < 0) {
            System.out.println("Başlangıç değeri 0'dan küçük olamaz !");
            return null;
        }

        if (toIndex > size) {
            System.out.println("Bitiş değeri liste boyutundan büyük olamaz !");
            return null;
        }

        if (fromIndex > toIndex) {
            System.out.println("Başlangıç değeri bitiş değerinden büyük olamaz !");
            return null;
        }


        Must<T> subList = new Must<>(toIndex - fromIndex);

        for (int i = fromIndex; i <= toIndex; i++) {
            subList.add(this.list[i]);
        }
        return subList;
    }

    public boolean contains(T t) {
        for (int i = 0; i < size; i++) {
            if (t.equals(this.list[i])) {
                return true;
            }
        }
        return false;
    }

    public <E> E[] toArray(E[] a) {
        if (a.length < size)
            return (E[]) Arrays.copyOf(this.list, size, a.getClass());
        System.arraycopy(this.list, 0, a, 0, size);
        if (a.length > size)
            a[size] = null;
        return a;
    }

    public Object[] toArray() {
        return Arrays.copyOf(this.list, size);
    }

    public void clear() {
        this.list = (T[]) new Object[DEFAULT_CAPACITY];
        this.size = 0;
    }


}


```