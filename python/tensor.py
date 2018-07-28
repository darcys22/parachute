import tensorflow as tf
from threading import Event, Thread
from game import Game

graph = tf.Graph()
with graph.as_default():
    num_input = 6
    hidden_units = 6
    num_class = 2

    X = tf.placeholder(tf.float32, shape=[1, num_input], name='X')
    W1 = tf.Variable(tf.random_normal([num_input, hidden_units], stddev=1.0), name="W1")
    B1 = tf.Variable(tf.random_normal([hidden_units], stddev=1.0), name="B1")
    A1 = tf.nn.softmax(tf.matmul(X,W1) + B1, name="A1")

    W2 = tf.Variable(tf.random_normal([hidden_units, num_class], stddev=1.0), name="W2")
    B2 = tf.Variable(tf.random_normal([num_class], stddev=1.0), name="B2")

    Y_ = tf.nn.softmax(tf.matmul(A1, W2) + B2, name="Y")
    Y_index = tf.argmax(Y_,1)

    W1_placeholder = tf.placeholder(tf.float32, shape=[num_input, hidden_units])
    W2_placeholder = tf.placeholder(tf.float32, shape=[hidden_units, num_class])
    W1_assign = tf.assign(W1, W1_placeholder)
    W2_assign = tf.assign(W2, W2_placeholder)

    B1_placeholder = tf.placeholder(tf.float32, shape=[hidden_units])
    B2_placeholder = tf.placeholder(tf.float32, shape=[num_class])
    B1_assign = tf.assign(B1, B1_placeholder)
    B2_assign = tf.assign(B2, B2_placeholder)

    init = tf.global_variables_initializer()
    saver = tf.train.Saver(max_to_keep=10)

POPULATION_SIZE = 20
MUTATION_PROBABILITY = 0.8
W_MUTATION_PROBABILITY = 0.5
B_MUTATION_PROBABILITY = 0.5
MAX_GEN = 10000
N_EPISODE = 10
is_training_finished = False
sessions = [tf.Session(graph=graph) for _ in range(POPULATION_SIZE)]
for sess in sessions:
    sess.run(init)
for generation in range(MAX_GEN)
    fitness_data = []
    for sess in sessions
        fitness = 0
        for _ in range(N_EPISODE):
            fitness_episode = 0

            ready = Event()
            para = Game(ready)

            flag = True
            save_threshold = 0
            while True:
                inputs = para.get_input_to_algo()
                predicted_action,p,w1,b1,w2,b2=sess.run([Y_index,Y_,W1,B1,W2,B2],feed_dict={X:[inputs]})
                para.set_directions(predicted_action)

                thread = Thread(target=game.launch)
                thread.start()
                ready.wait()

                results = game.get_results()


                ## Everything past here is verbatim

                if game.get_fitness() > 9000:
                    if flag:
                        print "its over9000"
                        flag = False
                    save_threshold = save_threshold + 1
                    if save_threshold > 1000:
                        saver.save(sess, 'game_checkpoints/my_test_model', global_step=generation)
                        is_training_finished = True
                        print "Saved Ultimate CheckPoint"
                        break
                if done:
                    fitness_episode = fitness_episode + game.get_fitness()
                    break
            if not flag:
                break
        fitness = fitness_episode / N_Episode
        fitness_data.append(fitness
                )
        # https://github.com/Shivakishore14/Tensorflow-genetic-algo-simple-gamebot/blob/master/jumperGameTrain.py

