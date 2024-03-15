#include <iostream> 
using namespace std;
class Node {
    public:
    int data;
    Node *next;
};
class CircularQueue{
    private:
    
    Node *rear;
    public:
    CircularQueue(){
        rear = nullptr;
    }
    bool is_empty(){
        return rear == nullptr;
    }
    void enqueue(int data){
        Node * newnode = new  Node();
        newnode->data = data;
        if(is_empty()) {
            newnode->next = newnode;
            rear = newnode;
        }
        else{

            // Node *temp = rear->next ;
            newnode->next = rear->next;
            rear->next = newnode;
            rear = newnode;
        }
        cout<<"Enqueued Value"<< data<<endl;
    }
    int dequeue(){
        if(is_empty()) {
            // cout<<-1<<endl;
            return -1;
        }
        int x ;
        if(rear->next == rear) {
            x = rear->data;
            rear = nullptr;
            return x;
        }else{
        Node *front = rear->next;
        x = rear->next->data;
        rear->next = rear->next->next;
        delete front;
        return x;
        }
    }
    void display(){
        if(is_empty()) return;
        Node *node = rear->next;
        do{
            cout<<node->data<<"->";
            node = node->next;
        } while(node != rear->next);
        cout<<"end"<<endl;
    }
};

int main(){
    CircularQueue cq ;
    cq.enqueue(1);
    cq.enqueue(2);
    cq.enqueue(3);
    cq.enqueue(4);
    cq.display();
    cout<<cq.dequeue()<<endl;
    cout<<cq.dequeue()<<endl;
    cout<<cq.dequeue()<<endl;
    cout<<cq.dequeue()<<endl;
    // cout<<cq.dequeue()<<endl;
    cq.display();


    return 0;
}