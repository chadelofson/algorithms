class Node {
  private int data;
  private Node next;

  Node(int data) {
    this.data = data;
    this.next = null;
  }

  public int getData() {

  }

  public Node getNextNode() {
    return this.next;
  }

  public void setNextNode(Node node) {
    this.next = node;
  } 

}